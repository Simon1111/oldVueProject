<template>
    <div>
        <h1 class="display-3">Компании</h1>
        <div class="hr-cust--par">
            <hr class="hr-cust">
        </div>
        {{curentId}} {{curentIdAds}}
        <AddEditAds 
            :adsForm=adsForm 
            @adsFormOpen=adsFormOpen 
            :curentId=curentId /> 
        <AddEditCompany 
            @adsFormOpen=adsFormOpen 
            @addItemOpen=addItemOpen 
            :addItem=addItem 
            :adsForm=adsForm
            :curentId=curentId />
        <v-btn color="success" @click="addItemOpen">Создать компанию</v-btn>
        <br>
        <CompaniesFilter />
        <Table @adsFormOpen=adsFormOpen @addItemOpen=addItemOpen />
    </div>
</template>

<script>
import AddEditAds from './AddEditAds'
import AddEditCompany from './AddEditCompany'
import Table from './Table'
import CompaniesFilter from './Filter'

export default {
    name: 'Companies',
    components: {
        AddEditAds,
        AddEditCompany,
        Table,
        CompaniesFilter
    },
    data:()=>({
        adsForm: false,
        addItem: false,
        curentId: '',
        curentIdAds: ''
    }),
    methods: {
        adsFormOpen(item){
            (~item.idAds)?this.curentIdAds=item.idAds:this.curentIdAds='';
            (~item.id)?this.curentId=item.id:this.curentId='';
            this.adsForm=!this.adsForm;
            // здесь будет axios запрос
        },
        addItemOpen(id){
            (~id)?this.curentId=id:this.curentId='';
            this.addItem=!this.addItem;
            // здесь будет axios запрос
        }
    }
}
</script>
