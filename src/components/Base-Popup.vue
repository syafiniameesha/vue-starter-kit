<template>
    <div>
        <el-dialog
            v-model="showPopup"
            align-center
            :show-close="true"
            :title=title
            @close="handleClose"
        >
            <p>{{ message }}</p>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "Base-Popup",
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        }
    },
    watch: {
        visible: {
            handler(newVal) {
                this.showPopup = newVal;
            },
            immediate: true
        }
    },
    data() {
        return {
            showPopup: false,
        };
    },
    computed: {
    },
    methods: {
        handleClose() {
            this.$emit('close-popup');
        }
    },
};
</script>

<style lang="scss" scoped>
</style>