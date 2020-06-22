<template>
	<div class="form-container col-lg-5 col-12">
                                <form  @submit.prevent="login()">

									<div class="form-group email">
										<label class="sr-only" for="login-email">Email or username</label>
										<span class="fa fa-user icon"></span>
                                        <input placeholder="Type your mail" id="login-email" type="email" v-model="form.email" class="form-control" >

                                        <span class="invalid-feedback" role="alert">

                                        </span>

									</div>

									<div class="form-group password">
										<label class="sr-only" for="login-password">Password</label>
										<span class="fa fa-lock icon"></span>
                                        <input class="form-control" v-model="form.password" placeholder="type your password" id="login-password" type="password" >

                                        <span class="invalid-feedback" role="alert">

                                        </span>

										<p class="forgot-password"><a href="reset-password.html">Forgot password?</a></p>
									</div>

									<button type="submit" class="btn btn-block btn-primary">Login</button>
									<div class="checkbox remember pt-2">
										<label>
											<input type="checkbox" name="remember" id="remember"> Remember me
										</label>
									</div>

								</form>
							</div>



</template>

<script>
export default {
data() {
    return {
        form:{
            email:null,
            password:null,
        },
        errors:[],
    }
},
created(){
    if(User.loggedIn()){

    this.$router.push({name:'upload'});

    }
},
methods:{
login(){
User.login(this.form);

},

}
}
</script>
