# Event Shift Scheduler

This is a simple project designed to generate and manage employee shifts (for an event or otherwise).

It has three services that interact with each other in order to make this happen:

- Form Portal

- Schedule Manager Portal

- the third will be named later.

Descriptions for each service is available in its respective section below. 

## Form Portal

The Form Portal provides an interface for staff members to input their availabilities and preferences.

These preferences will be taken into account when creating the schedule, and the algorithm will try to accomodate as many people's preferences as possible.

## Schedule Manager Portal

The Schedule Manager portal provides an interface for administrators to view generated schedules and modify them, invoking re-generations as necessary, or manually editing schedules if needed.

## Third Thing

The Third Thing is the algorithm that generates the schedules based on the staff preferences. 

It cannot be directly interfaced. However, it will respond to modifications made in the Schedule Manager Portal, re-generating schedules on request.
