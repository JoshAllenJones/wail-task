package main

import (
	"changeme/models"
	"context"
	"embed"
	"fmt"

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
	Title       string `json:"title"`
	Description string `json:"description"`
}

type SubBlockForm struct {
	Content string `json:"content"`
	ParentId uint `json:"parentId"`
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

func (a *App) CreateTask(t Task) string {
	fmt.Print(t.Title)
	return fmt.Sprintf("Task %s", t.Title)
}


type ProjectStruct struct {
	Id uint `json:"id"`
	Title string `json:"title"`
}

func (a *App) GetProjects() models.Project  {
	var project models.Project
	result := models.DB.Find(&project)
	if (result.Error != nil){
		panic(result.Error.Error())
	}
	return result
	
}








