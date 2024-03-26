from abc import ABCMeta, abstractmethod

class BaseAdapter(metaclass=ABCMeta):
    '''
    Class will be used as an interface for future adapters to cycle through any DB classes and
    used to fetch / populate objects from the DB to Memory
    '''

    def __init__(self):
        self.db_connection = None

    @abstractmethod
    def fetch_objects(self, *args: str):
        pass
