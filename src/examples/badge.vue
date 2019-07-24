<style scoped>
    h4{text-align: center;}
    .badge-box{color: #333;padding: 5px 10px;border: 1px solid #ddd;width: 100px;margin: 20px auto;text-align: center;}
</style>

<template>
    <div>
        <h4>标记</h4>
        <div class="badge-box">
            <gswBadge value="76">待签收</gswBadge>
        </div>
        <div class="badge-box">
            <gswBadge value="809">待签收</gswBadge>
        </div>
        <div class="badge-box">
            <gswBadge value="new">待签收</gswBadge>
        </div>
        <div class="badge-box">
            <gswBadge value="hot">待签收</gswBadge>
        </div>
        <div class="badge-box">
            <gswBadge value="809" :dot="true">待签收</gswBadge>
        </div>
    </div>
</template>

<script>
    import gswBadge from '@/components/badge/gswBadge';
    export default {
        name: '',
        data () {
            return {

            };
        },
        components: {
            gswBadge
        }
    };
</script>
