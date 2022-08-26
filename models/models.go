package models

import (
	"gorm.io/gorm"
	"time"
)

var DB *gorm.DB



type Project struct {
	gorm.Model
	ProjectName string `gorm:"type:text"`
	Description string `gorm:"type:text"`
	MainBlocks  []MainBlock `gorm:"foreignKey:ProjectId"`
}

type MainBlock struct {
	gorm.Model
	Content    string `gorm:"type:text"`
	ProjectId    uint
	LogEntries []LogBook `gorm:"foreignKey:MainBlockId"`
	SubBlocks  []SubBlock `gorm:"foreignKey:MainBlockId"`
}

type SubBlock struct {
	gorm.Model
	Content   string `gorm:"type:text"`
	MainBlockId uint
}

type LogBook struct {
	gorm.Model
	LogIn     time.Time
	LogOut    time.Time
	MainBlockId uint
}
