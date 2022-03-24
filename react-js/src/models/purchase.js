

export default class Purchase{
    constructor(
        userId, courseId, title, purchaseTime, price, id
    )
    {
        this.title = title;
        this.courseId = courseId;
        this.userId = userId;
        this.price = price;
        this.createTime = purchaseTime;
        this.id = id;
    }
}