
CREATE TABLE Messages(
	ID int AUTO_INCREMENT NOT NULL Primary Key,
    Title CHAR(255) NOT NULL,
    Email CHAR(255) NOT NULL,
    Body TEXT NOT NULL,
    IsReplied bit NOT NULL
    )
    