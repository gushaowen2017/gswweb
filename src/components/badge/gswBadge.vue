<!-- 
    名称：标记
    描述：按钮右上角小红点或数字
 -->

<style scoped>
    .gsw-badge-box{
      position: relative;
      display: inline-block;
    }
   .gsw-badge-red{
     position: absolute;
     right: -17px;
     top: -7px;
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: #f56c6c;
     color: #fff;
     text-align: center;
     line-height: 20px;
     font-size: 12px;
   }
   .gsw-longbadge{
     width: 35px;
     border-radius: 10px;
     right: -32px;
   }
   .gsw-dot{
     width: 10px;
     height: 10px;
     right: -8px;
     top: -3px;
   }
</style>

<template>
	<div class="gsw-badge-box">
        <div><slot></slot></div>
        <div class="gsw-badge-red" :class="{'gsw-longbadge':showValue.length>2,'gsw-dot':dot}">{{showValue}}</div>
    </div>
</template>

<script>
    export default {
        name: 'gswBadge',
        props:{
            value: "",//值
            dot: false,//是否为小红点，可不传，默认为false
        },
        data() {
            return {
            	showValue: ""
            }
        },
        methods: {
            
        },
        mounted() {
            if(this.dot) {
                this.showValue = "";
            } else {
                var curVal = this.value;//父组件传的值
                var regPos = /^\d+$/; // 非负整数
                if(regPos.test(curVal)){
                    //是数字
                    if(Number(curVal) > 99) {
                        this.showValue = "100+";
                    } else {
                        this.showValue = curVal;
                    }
                }else{
                    //不是数字
                    this.showValue = curVal;
                }
            }
        }
    };
</script>


