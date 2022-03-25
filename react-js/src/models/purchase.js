

export default class Purchase{
    constructor(
        userId, courseId, title, price, purchaseTime, id
    )
    {
        this.title = title;
        this.courseId = courseId;
        this.userId = userId;
        this.price = price;
        this.purchaseTime = purchaseTime;
        this.id = id;
    }
}