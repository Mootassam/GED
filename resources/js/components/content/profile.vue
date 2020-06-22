<template>
							<div class="content-panel">
								<h2 class="title">Profile<span class="pro-label badge badge-warning">PRO</span></h2>
								<form class="user-form">
									<fieldset class="fieldset mb-3">
										<h3 class="fieldset-title">Personal Info</h3>
										<div class="form-group form-row avatar">
											<figure class="figure col-lg-2 col-md-3 col-12">
												<img class="rounded img-fluid" src="assets/images/profiles/profile-square-1.png" alt="" />
											</figure>
											<div class="form-inline col-lg-10 col-md-9 col-12">
												<input type="file" class="file-uploader float-left">
												<button type="submit" class="btn btn-sm btn-default-alt float-left">Update Image</button>
											</div>
										</div>
										<div class="form-group form-row">
											<label class="col-lg-2 col-md-3 col-12 control-label">User Name</label>
											<div class="col-lg-10 col-md-9 col-12">
												<input type="text" class="form-control" value="Rebecca">
											</div>
										</div>

										<div class="form-group form-row">
											<label class="col-lg-2 col-md-3 col-12 control-label">First Name</label>
											<div class="col-lg-10 col-md-9 col-12">
												<input type="text" class="form-control" value="Rebecca">
											</div>
										</div>

										<div class="form-group form-row">
											<label class="col-lg-2 col-md-3 col-12 control-label">Last Name</label>
											<div class="col-lg-10 col-md-9 col-12">
												<input type="text" class="form-control" value="Sanders">
											</div>
										</div>

										<div class="form-group form-row">
											<label class="col-lg-2  col-md-3 col-12 control-label">Job Role(s)</label>
											<div class="col-lg-10 col-md-9 col-12">
												<select class="chosen form-control" multiple>
													<option value="ux-designer" selected>UX Designer</option>
													<option value="ui-designer" selected>UI Designer</option>
													<option value="dev-frontend">Frontend Developer</option>
													<option value="dev-backend">Backend Developer</option>
													<option value="de">Project Manager</option>
													<option value="de">Sales</option>
													<option value="de">marketing Executive</option>
												</select>
											</div>
										</div>

										<div class="form-group form-row">
											<label class="col-lg-2  col-md-3 col-12 control-label">Country</label>
											<div class="col-lg-10 col-md-9 col-12">
												<select class="chosen form-control" data-placeholder="Choose a Country...">
													<option value="us">US</option>
													<option value="uk" selected>UK</option>
													<option value="pl">Poland</option>
													<option value="cn">China</option>
													<option value="ca">Canada</option>
													<option value="de">Germany</option>
												</select>
											</div>
										</div>

									</fieldset>

									<fieldset class="fieldset mb-3">
										<h3 class="fieldset-title">Contact Info</h3>
										<div class="form-group form-row">
											<label class="col-lg-2  col-md-3 col-12 control-label">Email</label>
											<div class="col-lg-10 col-md-9 col-12">
												<input type="email" class="form-control" value="Rebecca@website.com">
												<p class="help-block">This is the email </p>
											</div>
										</div>

										<div class="form-group form-row">
											<label class="col-lg-2  col-md-3 col-12 control-label">Twitter</label>
											<div class="col-lg-10 col-md-9 col-12">
												<input type="text" class="form-control" value="SpeedyBecky">
												<p class="help-block">Your twitter username</p>
											</div>
										</div>

										<div class="form-group form-row">
											<label class="col-lg-2  col-md-3 col-12 control-label">Linkedin</label>
											<div class="col-lg-10 col-md-9 col-12">
												<input type="url" class="form-control" value="https://www.linkedin.com/in/lorem">
												<p class="help-block">eg. https://www.linkedin.com/in/yourname</p>
											</div>
										</div>

									</fieldset>
									<fieldset class="fieldset mb-3">
										<h3 class="fieldset-title">About Yourself</h3>
										<div class="form-group form-row">
											<label class="col-lg-2  col-md-3 col-12 control-label">Bio</label>
											<div class="col-lg-10 col-md-9 col-12">
												<textarea id="summernote-editor-bio" rows="10" class="form-control"></textarea>
												<p class="help-block">Share a little biographical information to fill out your profile. This may be shown publicly.</p>
											</div>
										</div>

									</fieldset>
									<hr>
									<div class="form-group form-row">
										<div class="col-xl-10 col-lg-9 col-12 offset-lg-2 offset-md-3">
											<input class="btn btn-primary" type="submit" value="Update Profile">
										</div>
									</div>
								</form>
							</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
