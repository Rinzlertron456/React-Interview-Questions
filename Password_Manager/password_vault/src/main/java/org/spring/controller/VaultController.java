package org.spring.controller;

import org.spring.model.Vault;
import org.spring.repository.VaultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class VaultController {
    @Autowired
    private VaultRepository vaultRepo;

    @PostMapping("/vault")
    Vault vault(@RequestBody Vault vault){
        return vaultRepo.save(vault);
    }

    @GetMapping("/vaults")
    List<Vault> getVaults(){
        return vaultRepo.findAll();
    }
}
