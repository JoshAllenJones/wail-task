package main

import (
	"changeme/database"
	"context"
	"embed"
	"fmt"
	"log"
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
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
			&task{},
		},
	})
	database.DB, err = gorm.Open(sqlite.Open("task.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to the database")
	}
	if err != nil {
		println("Error:", err.Error())
	}

	
}

type task struct {
	Title       string `json:"title"`
	Description string `json:"description"`
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

func (a *App) CreateTask(t task) string {
	fmt.Print(t.Description)
	fmt.Print(t.Title)
	return fmt.Sprintf("Task %s", t.Title)
}

func (a *App) CreateDb() {
	database.DB.AutoMigrate(&Project{})
}

func (a *App) GetFileList(f string) []string {
	filesNames, err := os.ReadDir("projects")
	if err != nil {
		log.Fatal(err)
	}

	fileList := []string{}

	for _, file := range filesNames {
		fmt.Println(file.Name())
		fmt.Println(file.Name())
		fileList = append(fileList, file.Name())
	}
	return fileList
}
