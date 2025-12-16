import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./tasksCollection";

Meteor.publish("tasks", function () {
    const byUserId = this.userId;
    if(!byUserId) {
        return this.ready();
    }
    return TasksCollection.find({ byUserId });
});