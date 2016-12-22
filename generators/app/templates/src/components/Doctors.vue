<template>
    <div class="row">
        <div class="col-xs-12">
            <ul id="doctorUl">
                <li v-for="(doc, index) in doctors" :key="doc._id" >
                    <div class="row">
                        <div class="col-xs-2">
                            <img :src="doc.image" width="160" height="90"/>
                        </div>
                        <div class="col-xs-10">
                            <h3>{{doc.name}}</h3>
                            <p> &#xf100;{{doc.email}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        methods: {
            getData(){
                this.$store.dispatch('searchDoc');
                // console.log(this.doctors);
                // this.$http.get('/doctors').then(
                //     (res) => {
                //         this.doctors = Array.from(JSON.parse(res.body));
                //         console.log(this.doctors);
                //     },
                //     (failMsg) => {
                //         alert('加载失败');
                //     }
                // );
            }
        },
        // data(){
            
        //     return {
        //         doctors: this.$store.state.doctors
        //         //doctors: ''
        //     }
        // },
        computed: mapState ({
            doctors: state => state.doctors
        }),
        mounted(){
            this.getData();
        }

    }

</script>