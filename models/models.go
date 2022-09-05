package models

import (
	"time"

	"gorm.io/gorm"
)

var DB *gorm.DB



type Project struct {
	gorm.Model
	ProjectName string `gorm:"type:text"`
	Description string `gorm:"type:text"`
	MainBlocks  []MainBlock `gorm:"foreignKey:ProjectId"`
}

type MainBlock struct {
	MainBlockId uint `gorm:"primaryKey"`
	Created time.Time
	CreatedFmt string `gorm:"type:text"`
	Updated time.Time
	UpdatedFmt string `gorm:"type:text"`
	Title  string `gorm:"type:text"`
	Content    string `gorm:"type:text"`
	ProjectId    uint
	LogEntries []LogBook `gorm:"foreignKey:MainBlockId"`
	SubBlocks  []SubBlock `gorm:"foreignKey:MainBlockId"`
}

type SubBlock struct {
	SubBlockId uint `gorm:"primaryKey"`
	Created time.Time
	CreatedFmt string `gorm:"type:text"`
	Updated time.Time
	UpdatedFmt string `gorm:"type:text"`
	Content   string `gorm:"type:text"`
	MainBlockId uint
}

type Status struct {
	StatusId uint `gorm:"primaryKey"`
	IsDoneStatus bool `gorm:"type:bool"`
	StatusTitle string `gorm:"type:text"`
}

type LogBook struct {
	gorm.Model
	LogIn     time.Time
	LogOut    time.Time
	MainBlockId uint
}
