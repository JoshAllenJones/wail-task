package main

import (
	"time"

	"gorm.io/gorm"
)

type Project struct {
	gorm.Model
	projectName string `gorm: "type:text"`
	description string `gorm: "type:text"`
	MainBlocks  []MainBlock
}

type MainBlock struct {
	gorm.Model
	content    string `gorm:"type:text"`
	Project    uint
	LogEntries []LogBook
	SubBlocks  []SubBlock
}

type SubBlock struct {
	gorm.Model
	content   string `gorm:"type:text"`
	MainBlock uint
}

type LogBook struct {
	gorm.Model
	logIn     time.Time
	logOut    time.Time
	MainBlock uint
}
