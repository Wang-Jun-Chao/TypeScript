class LikesController extends Chaplin.Controller {
    public beforeAction() {
        this.redirectUnlessLoggedIn();
    }

    public index(params) {
        this.collection = new Likes();
        this.view = new LikesView({collection: this.collection});
    }

    public show(params) {
        this.model = new Like({id: params.id});
        this.view = new FullLikeView({model: this.model});
    }
}
