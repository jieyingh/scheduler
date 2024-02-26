from datetime import datetime

class Job():

    def __init__(self):
        self.job_id: int
        self.requester: str
        self.event: str
        self.location: str
        self.min_staff: int
        self.max_staff: int
        self.start_time: datetime
        self.end_time: datetime
        self.priority: int
