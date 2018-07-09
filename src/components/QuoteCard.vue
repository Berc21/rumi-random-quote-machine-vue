<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <p class="title">
            {{quote}}
            </p>
            <p class="subtitle">
             Rumi
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
                  <button class="button is-link is-size-5" @click="showAnother">Show another one</button>
            </p>
            <p class="card-footer-item">
              <social-sharing url="https://localhost:3000/" :title="quote"
              inline-template>
                <div>
                  <network network="twitter">
                    <font-awesome-icon size="3x" color="#1DA1F2" :icon="['fab', 'twitter-square']" />
                  </network>
                </div>
              </social-sharing>
            </p>
          </footer>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "QuoteCard",
  data() {
    return {
      quote: "",
      favs: [],
    };
  },
  methods: {
    showAnother() {
      fetch("http://localhost:3000/quotes")
        .then(res => res.json())
        .then(res => (this.quote = res.quote));
    },
    fav() {

    }
  },
  created() {
    fetch("http://localhost:3000/quotes")
      .then(res => res.json())
      .then(res => (this.quote = res.quote));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
