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
	Updated time.Time
	Title  string `gorm:"type:text"`
	Content    string `gorm:"type:text"`
	ProjectId    uint
	LogEntries []LogBook `gorm:"foreignKey:MainBlockId"`
	SubBlocks  []SubBlock `gorm:"foreignKey:MainBlockId"`
}

type SubBlock struct {
	SubBlockId uint `gorm:"primaryKey"`
	Created time.Time
	Updated time.Time
	Content   string `gorm:"type:text"`
	MainBlockId uint
}

type LogBook struct {
	gorm.Model
	LogIn     time.Time
	LogOut    time.Time
	MainBlockId uint
}
