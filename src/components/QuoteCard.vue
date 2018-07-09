<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <p class="title">
              “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
            </p>
            <p class="subtitle">
              Jeff Atwood
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
                  <button class="button is-link is-size-5">Show another one</button>
            </p>
            <p class="card-footer-item">
              <social-sharing url="https://localhost:3000/" title="Rumi Quote Machine" description="There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors." quote="There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."
              inline-template>
                <div>
                  <network network="facebook">
                    <font-awesome-icon size="3x" color="#4267B2" :icon="['fab', 'facebook-square']" />
                  </network>
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
    return {};
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
