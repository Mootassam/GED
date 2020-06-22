<template>
                              <div class="content-panel">
								<div class="content-header-wrapper">
									<h2 class="title">My Drive</h2>
									<div class="actions">
                                        <button class="btn btn-success" data-toggle="modal" data-target="#modal-new-project" @click="add()"><i class="fa fa-plus"></i>Upload New File </button>
									</div>
								</div>
								<div class="content-utilities">
									<div class="page-nav">
										<span class="indicator">View:</span>
										<div class="btn-group" role="group">
											<button  class="active btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Grid View" id="drive-grid-toggle" @click="grids()"><i class="fa fa-th-large"></i></button>
											<button  class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="List View" id="drive-list-toggle" @click="shows()"><i class="fa fa-list-ul"></i></button>
										</div>
									</div>
									<div class="actions">
										<div class="btn-group">
											<button disabled class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false">All Items <span class="caret"></span></button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#"><i class="far fa-file-alt mr-1"></i> Documents</a>
												<a class="dropdown-item" href="#"><i class="far fa-file-image mr-1"></i> Images</a>
												<a class="dropdown-item" href="#"><i class="far fa-file-video mr-1"></i> Media Files</a>
												<a class="dropdown-item" href="#"><i class="far fa-folder"></i> Folders</a>
											</div>
										</div>
										<div class="btn-group">
											<button disabled  class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false"><i class="fa fa-filter"></i> Sorting <span class="caret"></span></button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#" >Newest first</a>
												<a class="dropdown-item" href="#">Oldest first</a>
											</div>
										</div>
										<div class="btn-group" role="group">
											<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Refresh" disabled><i class="fas fa-sync-alt"></i></button>
											<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Archive" disabled><i class="fa fa-archive"></i></button>

											<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Report spam" @click="onClick()" disabled><i class="fa fa-exclamation-triangle" ></i></button>

											<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Delete" @click="corbeille()" disabled><i class="far fa-trash-alt"></i></button>
										</div>
									</div>
								</div>

								<div v-if="grid" class="drive-wrapper drive-grid-view" >
									<div class="grid-items-wrapper">
										<div class="drive-item module text-center" v-for="(show,index) in drives " :key="index.id" >
											<div class="drive-item-inner module-inner">
												<div class="drive-item-title"><a href="#">{{show.name}}</a></div>
												<div class="drive-item-thumb">
                                                    <a  v-if="show.extension == 'jpg'" href="#">
<img v-bind:src="'storage/app/public/'+show.image+show.ext" alt="" class="img-fluid"  >
                                                        </a>
													<a href="#">


                                                        <i  v-if="show.extension == 'pptx' " class="far fa-file-powerpoint text-warning"></i>
                                                        <i  v-else-if="show.extension == 'xlsx' " class="far fa-file-excel text-success"></i>
                                                        <i  v-else-if="show.extension == 'pdf' " class="far fa-file-pdf text-danger"></i>
                                                        <i  v-else-if="show.extension == 'docx'" class="far fa-file-word text-info"></i>
                                                        <i  v-else-if="show.extension == 'jpg'" class="drive-item-thumb"></i>



                                                        </a>
												</div>
											</div>
											<div class="drive-item-footer module-footer">
												<ul class="utilities list-inline">

													<li class="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Download"><i class="fa fa-download"></i></a></li>
													<li class="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" @click="deletes(show.id,index)"><i class="fa fa-trash"></i></a></li>
												</ul>
											</div>
										</div>


									</div>

								</div>
                                <div  v-if="drives == ''" class="panel-heading panel-heading-theme-1">
																				<h4 class="panel-title mb-0">
																					 <i class="fa fa-plus-square"></i>
																				Your Drive is empty ! , Click on add new files

																			</h4>
																		</div>



<div v-if="adds" class="modal show" tabindex="-1" role="dialog" aria-labelledby="modal-new-project-label" aria-modal="true" style="padding-right: 17px; display: block;">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header justify-content-center">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					<h4 class="modal-title" id="modal-new-project-label">Upload new File </h4>
				</div>
				<div class="modal-body">

                        <form id="new-file-form"  @submit.prevent="submitForm">
      <div class="field is-grouped">
                            <div class="form-group">
							<label class="sr-only">File Name</label>
							<input type="text" class="form-control " name="name" placeholder="File name" v-model="fileName">
                            <ul v-if="errors.name" class="parsley-errors-list filled" id="parsley-id-5"><li class="parsley-required">{{errors.name[0]}}</li></ul>
						</div>

<div class="form-group">
    <label for="exampleFormControlFile1">Choose File </label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"  ref="file" name="file" @change="addFile()" >
              <ul v-if="errors.file" class="parsley-errors-list filled" id="parsley-id-5"><li class="parsley-required">{{errors.file[0]}}</li></ul>

  </div>


<div class="form-group">
							<label class="sr-only">Description</label>
							<textarea class="form-control" rows="6" placeholder="Enter your project description..."></textarea>
						</div>

                    <button type="submit" class="btn btn-success mx-auto" data-dismiss="modal" >
                        Add new file
                    </button>

  <button type="submit" class="btn btn-dark mx-auto" data-dismiss="modal"  @click="cancels()">
                     Cancel
                    </button>
            </div>
        </form>



				</div>
			</div>
		</div>
	</div>

<tree  v-if="trees" :data=drives></tree>

                        		</div>

</template>

<script>
import tree from './tree'
export default {
  components:{tree},
data() {

    return {
        form:{
            name:'',
            file:'',
            description:'',
        },
        errors:'',
        adds: false ,
        drives:{},
        files: {},
        file: {},

        formData: {},
        fileName: '',
        attachment: '',
        description:'',
        errors:'',
        trees: false,
grid:true ,

    }
},
created(){
        axios.get('api/drive')
        .then( res => this.drives = res.data)
        .catch()
},
methods:{
    corbeille(){

    },
    cancels(){
        this.adds = false ;
    },
    grids(){
         this.trees = false ;
         this.grid= true;
    },
    shows(){
        this.trees = true ;
         this.grid= false;
    },
    add(){
        this.adds = true ;
    },
  submitForm() {
            this.formData = new FormData();
            this.formData.append('name', this.fileName);
            this.formData.append('file', this.attachment);


            axios.post('api/drive', this.formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then(response => {
                     this.adds = false ;
                      this.fileName='';
                       this.attachment='';

                this.drives.unshift(response.data).fadeToggle("slow");

                })
                .catch(error => {
                    if(error.response.status == 422) {
                        this.errors = error.response.data.errors
                    }

                });
        },
 addFile() {
            this.attachment = this.$refs.file.files[0];
        },



    deletes(id,index){
        axios.put(`api/drive/${id}`).then(
            res => { this.drives.splice(index,1).fadeToggle("slow") ; }
        ).catch( error => { console.log(error) ; } )
     },

         downloadFile(file){
      axios.get('/api/download/'+file, {responseType: 'arraybuffer'}).then(res=>{
        let blob = new Blob([res.data], {type:'application/*'})
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = file
        link.click();
      })
    }
  },

}

</script>

<style>

</style>
