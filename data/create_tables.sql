CREATE TABLE IF NOT EXISTS staff (
    staffID INT(6),
    first_name VARCHAR(50),    
    last_name VARCHAR(50),
    preferred_name VARCHAR(50),
    department VARCHAR(50) NOT NULL,
    position VARCHAR(50) NOT NULL,
    PRIMARY KEY (staffID)
);

CREATE TABLE IF NOT EXISTS preferences (
    preferenceID INT AUTO_INCREMENT,
    request_type SET() NOT NULL,                         
    detail VARCHAR(50),
    staffID INT(6) NOT NULL,
    PRIMARY KEY (preferenceID),
    FOREIGN KEY (staffID) REFERENCES staff(staffID)
);

CREATE TABLE IF NOT EXISTS availabilities (
    availabilityID INT AUTO_INCREMENT,
    availability_start DATETIME NOT NULL,
    availability_end DATETIME NOT NULL,
    staffID INT(6) NOT NULL,
    PRIMARY KEY (availabilityID),
    FOREIGN KEY (staffID) REFERENCES staff(staffID)
);

CREATE TABLE IF NOT EXISTS jobs (
    jobID INT AUTO_INCREMENT,
    division VARCHAR(50),    
    event VARCHAR(50),
    location VARCHAR(50),
    min_staff INT,
    max_staff INT,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    PRIMARY KEY (jobID)
);

CREATE TABLE IF NOT EXISTS assignments (
    assignmentID INT AUTO_INCREMENT,
    jobID INT,
    availabilityID INT,
    staffID INT(6) NOT NULL,
    PRIMARY KEY (assignmentID),
    FOREIGN KEY (staffID) REFERENCES staff(staffID),
    FOREIGN KEY (jobID) REFERENCES jobs(jobID),
    FOREIGN KEY (availabilityID) REFERENCES availabilities(availabilityID)
);