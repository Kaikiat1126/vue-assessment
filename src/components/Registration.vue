<template>
    <div class="regitser-container">
        <div class="img-con">
            <Logo />
        </div>
        <h1 class="title">Registration</h1>
        <div class="fill-detials">Please fil up your details</div>
        <div class="input-group">
            <div class="input-title">Name</div>
            <a-input v-model="name" :style="{width:'100%'}" placeholder="Enter Name" allow-clear>
                <template #prefix>
                    <icon-user />
                </template>
            </a-input>
            <div v-show="!name" class="notify">
                *Please insert a name
            </div>
        </div>
        <div class="input-group">
            <div class="input-title">Birthday</div>
            <a-space direction="horizontal" size="large">
                <a-input-number v-model="day" :style="{width:'100%'}" placeholder="DD" class="input-demo" :min="1" :max="31"/>
                <a-input-number v-model="month" :style="{width:'100%'}" placeholder="MM" class="input-demo" :min="1" :max="12"/>
                <a-input-number v-model="year" :style="{width:'100%'}" placeholder="YYYY" class="input-demo" :min="1945" :max="2022"/>
            </a-space>
            <div class="notify" v-show="(day && month && year) === ''">
                *Please insert your birthday
            </div>
        </div>
        <div class="input-group">
            <div class="input-title">Email</div>
            <a-input v-model="email" :style="{width:'100%'}" placeholder="Enter Email" allow-clear/>
            <div class="notify" v-if="!email && !checked">
                *Please insert a valid email address
            </div>
            <br>
            <a-checkbox 
                v-model="checked" 
                size="large"
            >
                No email address
            </a-checkbox>
        </div>
        <a-button 
            :style="{width:'100%'}"
            class="mulah-orange-btn" 
            type="primary" 
            status="warning"
            @click="goToInfo"
        >
            Continue
        </a-button>
    </div>
</template>
<script>
import Logo from './Logo.vue'
export default {
    data() {
        return {
            name: '',
            year: '',
            month: '',
            day: '',
            email: '',
            checked: false
        }
    },
    methods: {
        goToInfo() {
            if (this.name && this.year && this.month && this.day && this.email && !this.checked) {
                if (this.validAll()) {
                    this.storeInfo();
                    return this.$router.push('/info');
                } else {
                    return;
                }
            }

            if (this.name && this.year && this.month && this.day && this.checked) {
                if (this.validWithoutEmail()) {
                    this.storeInfo();
                    return this.$router.push('/info');
                } else {
                    return;
                }
            }
            else {
                this.$notification.error({
                    title: 'Invalid Input',
                    content:
                        'Please fill up all the details',
                });
                return;
            }
        },
        validAll() {
            if (this.validName() && this.validEmail()) {
                return true;
            } else {
                return false;
            }
        },
        validWithoutEmail() {
            if (this.validName()) {
                return true;
            } else {
                return false;
            }
        },

        validName() {
            let reg = /^[a-zA-Z\s-]+$/;
            if (reg.test(this.name)) {
                return true
            } else {
                this.$notification.error({
                    title: 'Invalid Name',
                    content:
                        'Please insert a valid name',
                });
                return false
            }
        },
        validEmail() {
            let reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
            if (reg.test(this.email)) {
                return true
            } else {
                this.$notification.error({
                    title: 'Invalid Email',
                    content:
                        'Please insert a valid email address',
                });
                return false
            }
        },
        storeInfo() {
            this.$notification.success({
                title: 'Success',
                content:
                    'Your details has been saved',
            });
            localStorage.setItem('mulah-info',
                JSON.stringify({
                    name: this.name,
                    email: this.email,
                    birthday: `${this.day}/${this.month}/${this.year}`
                })
            );
        }
    },
    mounted() {
        localStorage.removeItem('mulah-info');
    },
    components: {
        Logo
    }
}
</script>
<style scoped>
.img-con {
    width: 100%;
    text-align: center;
    margin-top: 50px;
}

img {
    margin: 0 auto;
}

.regitser-container {
    width: 640px;
    margin: 0 auto;
}

.title {
    color: #7c7c7c;
}

.fill-detials {
    color: #7c7c7c;
    font-style: italic;
    margin-bottom: 20px;
}

.notify {
    color: red;
    font-style: italic;
    font-size: 14px;
}

.input-group {
    margin-top: 20px;
}


.input-title {
    color: #7c7c7c;
    margin-bottom: 10px;
    font-weight: bold;
}

.el-input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.el-input {
    width: 30%;
}

.name-input,
.email-input {
    width: 100%;
}

.con-btn {
    color: white !important;
    width: 100%;
}
</style>