--Create database Office_Replica
use Office_Replica
/*
create table users (
	UserId int NOT NULL PRIMARY KEY,
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	Pass varchar(255)
);
*/
/*
create table projects(
	ProjectId int NOT NULL PRIMARY KEY,
	ProjectCreator int FOREIGN KEY REFERENCES users(UserId),
	ProjectName varchar(255),
	ProjectType varchar(255),
	CreationDate date,
	LastModified date
);
*/
Drop table users;