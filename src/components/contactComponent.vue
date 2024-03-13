<template>
    <div>
        <h3>The Eatery</h3>
        <div class="info">
            <div class="website"><p>www.theeatery.co.za</p></div> 
            <div><p>enquiries@theeatery.com</p></div>  
        </div>
       
       
        <p>065 589 9832</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.info {
    display: flex; /* Use flexbox */
}

.info > div {
    margin-right: 20px; /* Add margin between the divs */
}
.website{
    padding-left: 200px;
}
</style>
