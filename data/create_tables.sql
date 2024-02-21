-- postgresql db table creation script

-- tracks staff information
CREATE TABLE IF NOT EXISTS staff (
    staffID VARCHAR(7) NOT NULL,
    first_name VARCHAR(50),    
    last_name VARCHAR(50),
    preferred_name VARCHAR(50),
    department VARCHAR(50) NOT NULL, -- what if they have 2 departments? or positions? or restrictions?
    position VARCHAR(50) NOT NULL,
    continuous_shifts BOOLEAN,
    restrictions SET("None", "Mobility"),
    PRIMARY KEY (staffID)
);

-- a preference, does not NEED to be fulfilled
-- same_job means they want exact same shift (same jobID)
-- same_time means they want to work at the same time, but not necessarily the same job
CREATE TABLE IF NOT EXISTS joint_shift (
    jointShiftID INT AUTO_INCREMENT,
    joint_type SET("same_job", "same_time"),
    staffID1 VARCHAR(7) NOT NULL,                         
    staffID2 VARCHAR(7) NOT NULL,
    staffID3 VARCHAR(7),
    staffID4 VARCHAR(7),
    PRIMARY KEY (jointShiftID),
    FOREIGN KEY (staffID1) REFERENCES staff(staffID),
    FOREIGN KEY (staffID2) REFERENCES staff(staffID),
    FOREIGN KEY (staffID3) REFERENCES staff(staffID),
    FOREIGN KEY (staffID4) REFERENCES staff(staffID)
);

-- a preference, does not NEED to be fulfilled
CREATE TABLE IF NOT EXISTS preferred_job (
    preferredJobID INT AUTO_INCREMENT,
    staffID VARCHAR(7) NOT NULL,
    jobID1 INT NOT NULL,
    jobID2 INT,
    PRIMARY KEY (preferredJobID),
    FOREIGN KEY (staffID) REFERENCES staff(staffID),
    FOREIGN KEY (jobID1) REFERENCES jobs(jobID),
    FOREIGN KEY (jobID2) REFERENCES jobs(jobID)
);

-- availabilities of staff. preferred means they want to work at that time, if not preferred try to avoid
CREATE TABLE IF NOT EXISTS availabilities (
    availabilityID INT AUTO_INCREMENT,
    availability_start DATETIME NOT NULL,
    availability_end DATETIME NOT NULL,
    preferred BOOLEAN NOT NULL,
    staffID VARCHAR(7) NOT NULL,
    PRIMARY KEY (availabilityID),
    FOREIGN KEY (staffID) REFERENCES staff(staffID)
);

-- what our staff will need to do (tasks)
-- requestor can be PS or another department or division
-- jobs requested by PS have the top PRIORITY
-- if anything needs to be cut, the min_staff of lower priority jobs can be cut
CREATE TABLE IF NOT EXISTS jobs (
    jobID INT AUTO_INCREMENT,
    requestor VARCHAR(50) NOT NULL,    
    event VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    min_staff INT NOT NULL,
    max_staff INT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    PRIORITY INT NOT NULL, -- need to decide if 1 is lowest or highest prio
    PRIMARY KEY (jobID)
);

-- restrictions on jobs. some jobs may be limited to managers for example
CREATE TABLE IF NOT EXISTS job_restriction (
    jobRestrictionID INT AUTO_INCREMENT,
    jobID INT,
    department VARCHAR(50) NOT NULL,
    position VARCHAR(50) NOT NULL,
    PRIMARY KEY (jobRestrictionID),
    FOREIGN KEY (jobID) REFERENCES jobs(jobID)
);

-- links staff to jobs. Can be used to create schedules
CREATE TABLE IF NOT EXISTS assignments (
    assignmentID INT AUTO_INCREMENT,
    jobID INT,
    staffID VARCHAR(7) NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    PRIMARY KEY (assignmentID),
    FOREIGN KEY (staffID) REFERENCES staff(staffID),
    FOREIGN KEY (jobID) REFERENCES jobs(jobID),
);