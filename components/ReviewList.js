app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: `
    <div class="review-container" v-if="reviews.length > 0">
      <h3>Review:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br/>
          "{{ review.review }}"
          <br/>
          {{ review.name }} {{ review.recommend === "yes" ? "recommends" : "does not recommend" }} this product
        </li>
      </ul>
    </div>
  `
});
