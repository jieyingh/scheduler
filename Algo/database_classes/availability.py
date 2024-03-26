from datetime import datetime

class Availability():

    def __init__(self):
        self.availability_id: int
        self.availability_start: datetime
        self.availability_end: datetime
        self.preferred: bool
        self.staff_id: int
