package org.spring.repository;

import org.spring.model.Vault;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface VaultRepository extends JpaRepository<Vault,String> {
}
