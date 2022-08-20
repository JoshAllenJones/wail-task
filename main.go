package main

import (
	"context"
	"embed"
	"fmt"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:            "wail-task",
		Width:            1024,
		Height:           768,
		Assets:           assets,
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			&task{},
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}

type task struct {
	Title string `json:"title"`
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
	return fmt.Sprintf("Task %s", t.Title)
}

