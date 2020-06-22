<template>
           			<div class="form-container col-lg-12 col-12">
								<form @submit.prevent="signup()" >

									<div class="form-group email" >
										<label class="sr-only" for="login-email">Name</label>
										<span class="fa fa-user icon"></span>
                                        <input id="name" type="text" class="form-control" placeholder="Name" v-model="form.name">
                                        <ul  v-if="errors.name" class="parsley-errors-list filled" id="parsley-id-5"><li class="parsley-required">{{errors.name[0]}}.</li></ul>


                                    </div>
                                    <div class="form-group email">
										<label class="sr-only" for="login-email">E-Mail Address</label>
										<span class="fa fa-user icon"></span>
                                        <input id="email" type="email" class="form-control" placeholder="Email " v-model="form.email">
<ul v-if="errors.email"  class="parsley-errors-list filled" id="parsley-id-5"><li class="parsley-required">T{{errors.email[0]}}</li></ul>

                                    </div>
                                    <div class="form-group email">
										<label class="sr-only" for="login-email">Password</label>
                                        <span class="fa fa-user icon"></span>
                                        <input id="password" type="password" class="form-control" placeholder="Password" v-model="form.password">
<ul v-if="errors.password" class="parsley-errors-list filled" id="parsley-id-5"><li class="parsley-required">{{errors.password[0]}}</li></ul>
                                    </div>


									<div class="form-group password">
										<label class="sr-only" for="login-password">Confirm Password</label>
										<span class="fa fa-lock icon"></span>
										<input id="login-password" type="password"  name="password_confirmation" class="form-control" placeholder=" Confirm Password">
									</div>

									<button type="submit" class="btn btn-block btn-primary">Register</button>
<div v-if="sucess" class="alert alert-theme alert-success alert-dismissible" role="alert">
										<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
										<strong>Well done!</strong> You successfully Registred now you can login .
									</div>

								</form>
							</div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                name :null,
                email :null,
                password :null,

            },
            errors:[''],
            sucess:false
        }
    },
    methods:{
        signup(){
            axios.post('/api/auth/signup',this.form)
            .then(res => {
                User.responseAfterLogin(res)
                this.sucess=true;
                this.form='';

            })
            .catch(error => {

                if(error.response.status == 422 ){
                    this.errors = error.response.data.errors
                }
                else{
                    console.log(error);
                }
            })
               }
    }
}
</script>
