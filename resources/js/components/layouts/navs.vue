<template>
					<div class="side-bar">
								<div class="user-info">
									<img class="img-profile rounded-circle img-fluid mx-auto" src="css/images/profiles/profile-square-1-lg.png" alt="" />
									<ul class="meta list list-unstyled">
										<li class="name">


											<label class="label label-info">{{name}}
                                                </label>
										</li>
										<li class="email"><a href="#">  </a></li>
										<li class="activity">Last logged in:  </li>
									</ul>
								</div>

								<nav class="side-menu">
									<ul class="nav">
										<li>
                                            <router-link to="/profile">
                                            <a><span class="pe-icon pe-7s-user icon"></span> Profile</a>
                                        </router-link>
										</li>
										<li >
                                            <router-link to="/filesupload">

                                            <span class="pe-icon pe-7s-pendrive icon"></span> Drive
                                        </router-link>
                                        </li>
                                        <li >
                                            <router-link to="/logout">

                                                <span class="pe-icon pe-7s-power icon"></span> Sign out
                                        </router-link>
                                        </li>
									</ul>
								</nav>

							</div>
</template>

<script>
export default {
    created(){
        EventBus.$on('logout',()=>{
            User.logout();
        });
    },
   data() {
       return {
           name:User.name()
       }
   },


}
</script>

<style>

</style>
