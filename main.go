package main

import (
	"changeme/models"
	"context"
	"embed"
	"fmt"
	"time"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	var err error
	// Create application with options
	err = wails.Run(&options.App{
		Title:     "wail-task",
		Width:     1024,
		Height:    768,
		Assets:    assets,
		OnStartup: app.startup,
		Bind: []interface{}{
			app,
			&Task{},
		},
	})
	models.DB, err = gorm.Open(sqlite.Open("task.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database")
	}
	err = models.DB.AutoMigrate(models.Project{}, models.MainBlock{}, models.SubBlock{}, models.LogBook{})
	if err != nil {
		panic(err.Error())

	}

}

type Task struct {
	MainBlockId uint   `json:"mainBlockId"`
	Title       string `json:"title"`
	Created     string `json:"created"`
	Description string `json:"description"`
	ProjectId   uint   `json:"projectId"`
}

type SubBlockForm struct {
	Content  string `json:"content"`
	ParentId uint   `json:"parentId"`
}

type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) CreateMainBlock(t Task) []Task {
	var err error
	models.DB, err = gorm.Open(sqlite.Open("task.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database")
	}
	newTask := models.MainBlock{Title: t.Title, Created: time.Now(), ProjectId: t.ProjectId}
	result := models.DB.Create(&newTask)
	if result.Error != nil {
		panic(result.Error.Error())
	}
	var taskObj []Task
	allTaskResult := models.DB.Table("main_blocks").Where("project_id = ?", t.ProjectId).Find(&taskObj)
	if allTaskResult.Error != nil {
		panic(allTaskResult.Error.Error())
	}
	return taskObj
}

type ProjectStructQuery struct {
	Id          uint   `json:"id"`
	ProjectName string `json:"title"`
}

type LogBookEntry struct {
	Id     uint      `json:"id"`
	LogIn  time.Time `json:"LogIn"`
	LogOut time.Time `json:"LogOut"`
}

func (a *App) GetProjects() []ProjectStructQuery {
	var resultList []ProjectStructQuery
	var err error
	models.DB, err = gorm.Open(sqlite.Open("task.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database")
	}
	fmt.Println("Beep boop getting hit")
	println("Declared result struct")
	// models.DB.Table("projects").Select("id", "project_name").Scan(&result)
	models.DB.Table("projects").Select("id", "project_name").Find(&resultList)
	return resultList
}

func (a *App) GetTasks(id uint) []Task {
	var err error
	models.DB, err = gorm.Open(sqlite.Open("task.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database")
	}
	var returnList []Task
	result := models.DB.Table("main_blocks").Where("project_id = ?", id).Order("created asc").Find(&returnList)
	if result.Error != nil {
		panic(result.Error.Error())
	}
	return returnList
}

func (a *App) ClockIn(taskId uint) {
	logRecord := models.LogBook{MainBlockId: taskId, LogIn: time.Now()}
	result := models.DB.Create(&logRecord)
	if result.Error != nil {
		panic(result.Error.Error())
	}
	fmt.Println("Look at this")
}
