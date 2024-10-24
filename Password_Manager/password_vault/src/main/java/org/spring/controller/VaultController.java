package org.spring.controller;

import org.spring.exception.VaultNotFoundException;
import org.spring.model.Vault;
import org.spring.repository.VaultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class VaultController {

    @Autowired
    private VaultRepository vaultRepo;

    @PostMapping("/vault")
    Vault vault(@RequestBody Vault vault){
        System.out.println("Received request to create vault: " + vault);
        return vaultRepo.save(vault);
    }

    @GetMapping("/vaults")
    List<Vault> getVaults(){
        return vaultRepo.findAll();
    }

    @GetMapping("/vault/{id}")
    Vault getVaultById(@PathVariable String id){
        return vaultRepo.findById(id).orElseThrow(()->new VaultNotFoundException(id));
    }
}
