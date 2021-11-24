--Create database Office_Replica
use Office_Replica
/*
create table users (
	UserId varchar(255) NOT NULL PRIMARY KEY,
	UserName varchar(255) NOT NULL,
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255) NOT NULL,
	Pass varchar(255) NOT NULL
);
*/

--Drop table projects;
/*
create table projects(
	ProjectId varchar(255) NOT NULL PRIMARY KEY,
	ProjectCreator varchar(255) FOREIGN KEY REFERENCES users(UserId),
	ProjectName varchar(255),
	ProjectType varchar(255),
	CreationDate date,
	LastModified date
);
*/
--Drop table projects;
--Drop table users;

--ALTER TABLE projects
--ADD CONSTRAINT ID PRIMARY KEY IDENTITY(1,1);

--select *
--from projects;

--select *
--from users;