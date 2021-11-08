use Office_Replica;

Insert INTO Users
Values (1, 'Smith', 'Gaddy', 'jsgaddy@gmail.com', 'password');

INSERT INTO Projects
Values (1, 1, 'myFirstProject', 'Excel', GETDATE(), GETDATE());

INSERT INTO Projects
Values (2, 1, 'Another Project', 'Word', GETDATE(), GETDATE());