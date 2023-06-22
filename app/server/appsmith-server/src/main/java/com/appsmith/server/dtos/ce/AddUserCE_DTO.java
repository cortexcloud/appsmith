package com.appsmith.server.dtos.ce;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddUserCE_DTO {

    String username;
    
    @NotNull
    String permissionGroupId;
}
