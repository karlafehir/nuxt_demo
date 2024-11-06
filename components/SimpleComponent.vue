<template>
    <div class="container">
        <div class="text-section">
            <h2>Odmor u gradu</h2>
            <h3>Posebna cijena vikend ponude</h3>
            <p>Ukupna cijena paketa za 2 osobe i 2 noćenja iznosi 180,70 € za Comfort sobu i 161,20 € za Classic sobu..</p>
        </div>

        <div class="image-section">
            <img src="~/assets/hotel_osijek.jpg" alt="Description" />
        </div>
    </div>
</template>
  
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-section {
  flex: 1;
  padding-right: 20px;
}

.image-section {
  width: 300px;
  height: 600px;
  overflow: hidden;
  position: relative;
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
