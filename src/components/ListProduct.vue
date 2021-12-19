<template>
  <div>
    <h1>homepage</h1>
    <h2>List of Products</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="productitem in listofproducts" :key="productitem.id">
          <td>{{ productitem.data().productname }}</td>
          <td>{{ productitem.data().productprice }}</td>
          <td>
            <!-- <button @click="editProduct(productitem.id)">Edit</button>
            <button @click="deleteProduct(productitem.id)">Delete</button> -->
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <form @submit.prevent="updateProduct">
      <input
        type="text"
        placeholder="Enter Product Name"
        v-model="product.productname"
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        v-model="product.productprice"
      />
      <button>Update Product</button>
    </form> -->
  </div>
</template>

<script>
import { db } from '../firebase.js'
import { collection, getDocs, doc, setDoc, deleteDoc  } from 'firebase/firestore'

export default {
  data() {
    return {
      listofproducts: [],
      product: {
        productname: "",
        productprice: "",
      },
    };
  },
  methods: {
    async readData() {
      const querySnapshot = await getDocs(collection(db, "listofproducts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.listofproducts.push(doc);
      });
    },
    // async deleteProduct(id) {
    //   if (confirm("Are you sure? ")) {
    //     const docRef = doc(db, "listofproducts", id);
    //     await deleteDoc(docRef);
    //     window.location.reload();
    //   } else {
    //   }
    // },
    // editProduct(id) {
    //   this.id = id.doc;
    // },
    // updateProduct(id) {
    //   const productname = this.product.productname;
    //   const productprice = this.product.productprice;

    //   const docRef = doc(db, "listofproducts", id);
    //   const payload = { productname, productprice };

    //   setDoc(docRef, payload);
    // },
  },
  created() {
    this.readData();
  },
};
</script>
