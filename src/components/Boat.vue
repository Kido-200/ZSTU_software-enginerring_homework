<template>
<div class="wrapper">
  <div class="boat" v-for="(item,index) in num " :key="index">
    <img :src="imgURL" alt="">
    <p>{{item}}</p>
    <div class="btn">
      <button @click="sClick(item-1)">S</button>
      <!-- item是从1开始的 -->
      <p > {{sTime(item-1)}}</p>
      <!-- v-text="sTime(item-1)" -->
    </div>
    <div class="btn">
      <button @click="eClick(item-1)">E</button>
      <p >{{eTime(item-1)}}</p>
    </div>
    <button @click="clear(item-1)">clear</button>
  </div>
</div>

</template>
 
<script>
import {formatDate} from '../common/utils'

export default {
  name: 'Boat',
  data(){
    return {
      boat:[],
    }
  },
  props:{
    num:{
      type:Number,
      default(){
        return 1;
      }
    },
    imgURL:{
      type:String,
      default(){
        return 'static/imgs/1.jpg'
      }
    }
  },
  methods:{
  sTime(item){
    return this.boat[item]===undefined||this.boat[item].s == undefined ? 'free' : formatDate(this.boat[item].s,'yyyy/MM/dd hh:mm:ss')
  },
  eTime(item,num){
    return this.boat[item]===undefined||this.boat[item].e == undefined ? 'not yet' : formatDate(this.boat[item].e,'yyyy/MM/dd hh:mm:ss')
  },
  sClick(item){
    const date = new Date()
    if(this.boat[item] === undefined)
      this.$set(this.boat,item,{})
    else if(this.boat[item].s != undefined)
      {
        if(this.boat[item].e == undefined)
          alert('The boat has been rented.');
        else
          alert('The boat is cleaning now.')
        return
      }
    this.$set(this.boat[item],'s',date)
    if(date.getHours()<12)
    {
      this.$set(this.boat[item],'mark',0)//白天
    }
    else{
      this.$set(this.boat[item],'mark',1)//晚上
    }
  },
  eClick (item){
    const date = new Date()
    if(this.boat[item] === undefined)
      alert('This boat is not rented now.')
    else if(this.boat[item].e != undefined)
      {
        alert('The boat is cleaning now.')
      }
    else
      {
        this.$set(this.boat[item],'e',date)
        //将租用时间输出
        this.$emit('res',this.boat[item].e.getTime()-this.boat[item].s.getTime(),this.boat[item].mark)
      }
  },
  clear(item){
    this.$set(this.boat,item,undefined)
  }
  },
}
</script>
  
<style >
  .wrapper{
    display: flex;
    flex-wrap:wrap;
   font-size:25px;
  }
   .boat{
    width:30%;
    margin:20px 0 20px 20px;
    text-align:center;
   
   }
   .boat img{
      width: 100%;
    }
    .boat p{
      height:35px;
      margin:3px 0;
    }
    button{
      width:60px;
      height:60px;
    }
</style>