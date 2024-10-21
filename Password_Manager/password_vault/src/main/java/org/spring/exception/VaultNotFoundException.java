package org.spring.exception;

public class VaultNotFoundException extends RuntimeException{
    public VaultNotFoundException(String id){
        super("Vault not found with this name: "+id);
    }
}
