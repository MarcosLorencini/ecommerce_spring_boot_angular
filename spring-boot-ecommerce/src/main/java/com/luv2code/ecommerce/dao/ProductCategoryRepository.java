package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//gerar automaticamente uma API REST sem a necessidade de implementar controladores (controllers) explicitamente.
/*Após executar a aplicação, os seguintes endpoints estarão disponíveis automaticamente:

        GET /product-category: Retorna todos as categorias de produtos.
        GET /product-category/{id}: Retorna uma categoria de produtos.
        POST /product-category: Cria um nova categoria de produtos.
        PUT /product-category/{id}: Atualiza uma categoria de produtos.
        DELETE /product-category/{id}: Exclui uma categoria de produtos.

        collectionResourceRel é o retorno da lista do json no postman, caso não use pega o nome da
        entidade productCategories
        */
//caso não utilize o path o caminho das chamadas seria /productCategories pega o nome da entidade
@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
