<template>
    <div>
        <h4>
            {{item.original_title ? item.original_title : item.original_name}}
        </h4>
    </div>

</template>

<script>
import {store} from '../store'

export default{
    name: 'AppCard',
    data(){
        return{
            store
        }
    },
    mounted(){
        
    },
    methods:{

    }
}
</script>

<style scoped>

</style>