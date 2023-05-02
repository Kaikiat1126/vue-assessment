<template>

    <div id="welcome-container">
        <div id="welcome-above">
            <div id="img-container">
                <Logo />
            </div>
            <div class="welcome-word">Hello,</div>
            <div class="welcome-word">Welcome !</div>
            <div id="target-word">Check Your Loyalty Points & Rewards</div>
        </div>
        <div id="input-phone-area">
            <a-input-group>
                <a-select 
                    :options="options" 
                    :style="{width:'80px'}" 
                    v-model="value"
                    size="large"
                />
                <a-input
                    :style="{width:'240px'}" 
                    placeholder="Enter your mobile number" 
                    allow-clear 
                    hide-button
                    max-length="10"
                    size="large"
                    v-model="inputMobile"
                    input="onlyDigit"
                />
            </a-input-group>
        </div>
        <a-button 
            class="mulah-orange-btn" 
            type="primary" 
            status="warning"
            @click="valid"
        >
            Check Loyalty Points
        </a-button>
    </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
    methods: {
        valid() {
            if(this.inputMobile == '') {
                this.$notification.warning('Don\'t leave empty mobile number')
                return;
            }

            if(this.inputMobile.length >= 9) {
                if(this.inputMobile == '173527250' && this.value == '+60') {
                    this.$notification.success('Login success');
                    this.$router.push('/registration');
                    console.log(this.value + this.inputMobile);
                }
                else{
                    this.$notification.error('Wrong mobile number');
                    this.inputMobile = '';
                }
            }
            else {
                this.$notification.warning('Please enter a valid mobile number');
                this.inputMobile = '';
                return;
            }
        }
    },
    watch: {
        inputMobile() {
            this.inputMobile = this.inputMobile.replace(/[^0-9]/g, '');
        }
    },
    data() {
        return {
            inputMobile: '',
            value: '+60',
            options: [
                {
                    value: '+60',
                    label: '+60',
                },
                {
                    value: '+61',
                    label: '+61',
                }
            ]
        }
    },
    components: {
        Logo
    }
}
</script>
<style>

#welcome-container{
    width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    place-items: center;
}

#welcome-above{
    margin-top: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* text-align: center; */
}

#img-container
{
    display: flex;
    justify-content: center;
}

#welcome-above img{
    margin: 40px 0;
}

.welcome-word
{
    font-size: 48px;
    font-weight: 600;
    color: #7b7b7b;
}

#target-word{
    font-size: 18px;
    font-weight: 600;
    color: #ff7d00;
    margin-top: 20px;
}

#input-phone-area
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    row-gap: 20px;
    padding: 0 20px;
    margin-top: 30px;
}

#mobile-input{
    width: 220px;
    font-size: 16px;
    font-weight: 500;
    color: grey;
    padding-left: 15px;
}

#mobile-header
{
    width: 30px;
    font-size: 16px;
    font-weight: 500;
    color: grey;
    text-align: center;
}
</style>