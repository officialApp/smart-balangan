<template>
    <div class="p-4 bg-white shadow-lg rounded-lg ml-4">
        <div class="container-fluid">
            <div class="row h-30">
                <div class="col-sm-6 my-auto text-center">
                        <button type="button" @click="$router.push('/admin/kategori/menu')" class="btn btn-sm btn-primary  ">List Kategori</button>
                </div>
                <div class="col-sm-6 my-auto text-center">
                        <button type="button" @click="$router.push('/admin/kategori/menu/list_item')" class="btn btn-sm btn-primary  ">List Item</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    layout:"admin"
}
</script>