<template>
  <div id="app">
    <div class="show">
      <div >
        <i>average renting time:</i>
        <p>morning:{{dATime}} afternoon:{{nATime}} (s)</p>
      </div>
      <div>
        <i>longest renting time:</i>
        <p>morning:{{dMTime}} afternoon:{{nMTime}}  (s)</p>
      </div>
    </div>
 
    <Boat imgURL="static/imgs/1.jpg" :num="3" @res="getRes" />
    <Boat imgURL="static/imgs/2.jpg" :num="6" @res="getRes" />
    <Boat imgURL="static/imgs/3.jpg" :num="3" @res="getRes" />

  
  </div>
</template>

<script>
import Boat from './components/Boat'
export default {
  name: 'App',
  data(){
    return {
      num:3,
      dtime:[],
      ntime:[],
      dMTime:0,
      nMTime:0,
    }
  },
  components: {
    Boat
  },
  computed:{
    dATime(){
      let sum = 0;
      for(let i in this.dtime)
      {
        sum += this.dtime[i]
      }
      return this.dtime.length===0 ? '0' : sum / this.dtime.length
    },
    nATime(){
      let sum = 0;
      for(let i in this.ntime)
      {
        sum += this.ntime[i]
      }
      return this.ntime.length===0 ? '0' : sum / this.ntime.length
    }
  },
  methods:{
    getRes(time,mark)
    {
      time/=1000
      if(mark===0)
      {
        this.dtime.push(time)
        if(time>this.dMTime)
          this.dMTime = time
      }
      else
        {
          this.ntime.push(time)
          if(time>this.nMTime)
          {
            this.nMTime = time
          }
        }
    }
  },
  }
</script>

<style scoped lang="less">
  .show{
    display:flex;
    justify-content: space-around;
    font-size:40px;
  }
</style>
