<template>
  <li class="accordion__item" :class="{ 'cursor-pointer': !visible }">
    <div
      class="row accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <div class="col">
        <slot name="accordion-trigger"></slot>
      </div>

      <div class="col-3 arrow text-center my-auto">
        <span>
          <span class="col tl16" v-if="!visible">Mais informação</span>
          <span class="col tl16" v-else>Menos informação</span>
        </span>
        <i
          :class="{ 'arrow-accordion': !visible }"
          class="fa fa-angle-up fa-lg"
        ></i>
      </div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  padding: 10px 10px 10px 30px;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.accordion__content {
  padding-top: 20px;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.arrow i {
  transition: all 0.4s ease;
}

.arrow-accordion {
  transform: rotateZ(-180deg);
}

.cursor-pointer {
  cursor: pointer;
}
</style>
