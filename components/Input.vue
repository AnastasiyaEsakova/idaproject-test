<template>
  <div class="input-container">
    <label class="input__label">
      <p class="input__label-title" :class="{'input__label-title_red-point': redPoint}">{{label}}</p>
      <input v-if="!textarea"
        ref="input"
        class="input"
        :type="type"
        :placeholder="placeholder"
        :class="{'input_error-message': errorMessage}"
        :required="!!required"
        :minlength="minlength"
        :maxlength="maxlength"
        @change="handleChangeInput"
      >
      <textarea v-else class="input input__textarea" :placeholder="placeholder"></textarea>
    </label>
    <p class="input__error" :class="{'input__error_visible': errorMessage}">{{errorMessage}}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue'

defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  minlength: {
    type: [String, Number],
    default: 2
  },
  maxlength: {
    type: [String, Number],
    default: 40
  },
  redPoint: Boolean,
  textarea: Boolean,
  required: Boolean
})

const input = ref()
const errorMessage = ref()

const handleChangeInput = () => {
  if(!input.value) return

  if(!input.value.validity.valid) {
    errorMessage.value = input.value.validationMessage
  } else {
    errorMessage.value = ''
  }
}

</script>

<style lang="scss">
@use './style' as colors;

.input__label {
  display: flex;
  flex-direction: column;
}

.input__label-title {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: colors.$gray04;
  position: relative;
  width: max-content;
  margin-bottom: 4px;
}

.input__label-title_red-point {
   &::after{
    content: '';
    width: 4px;
    height: 4px;
    position: absolute;
    top: 0;
    right: -6px;
    background: colors.$red01;
    border-radius: 4px;
  }
}

.input {
  background: colors.$background;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  min-height: 36px;
  padding-left: 16px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  box-sizing: border-box;

  &::placeholder {
    color: colors.$gray02;
    margin: 0;
    padding: 0;
  }

  &:focus {
    outline: none;
  }
}

.input_error-message {
  border: 1px solid colors.$red01;
}

.input__textarea {
  resize: none;
  min-height: 108px;
  padding-top: 10px;
}

.input__error {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: colors.$red01;
  margin-top: 4px;
  opacity: 0;
  transition: 0.3s linear;
  min-height: 10px;
}

.input__error_visible {
  opacity: 1;
}
</style>
