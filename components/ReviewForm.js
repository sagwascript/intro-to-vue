app.component("review-form", {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" name="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" name="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <label for="rating">Would you recommend this product?</label>
    <label>
      <input type="radio" value="yes" v-model="recommend"> Yes
    </label>
    <label>
      <input type="radio" value="no" v-model="recommend"> No
    </label>

    <input class="button" type="submit" value="submit">
  </form>
  `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommend: "yes"
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null) {
        alert("Please fill the review form correctly.");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      };
      this.$emit("review-submitted", productReview);
      this.name = "";
      this.review = "";
      this.rating = "";
      this.recommend = "yes";
    }
  }
});
