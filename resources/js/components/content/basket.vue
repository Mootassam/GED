<template>

								<div class="drive-wrapper drive-list-view">
									<div class="table-responsive drive-items-table-wrapper">
										<table class="table">
											<thead>
												<tr>
													<th class="type"></th>
													<th class="name truncate">Name</th>
													<th class="date">Uploaded</th>
													<th class="size">Size</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="shows in this.data " :key="shows.id">
													<td class="type"><i class="far fa-file-alt text-dark"></i></td>
													<td class="name truncate"><a href="#">{{shows.name}}</a></td>
													<td class="date">{{shows.created_at}}</td>
													<td class="size">18 KB</td>
												</tr>

											</tbody>
											</table>
										</div>
									</div>
</template>

<script>

export default {
    props:['data'],
    data() {
        return {


        }
    },
    mounted(){
        axios.get('').then('').catch('')
    }

}
</script>

<style>

</style>
