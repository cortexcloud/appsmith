package com.appsmith.server.configurations;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@Configuration
public class SSOConfig {

    @Setter(AccessLevel.NONE)
    private boolean isSSOMapperEnable = false;

    @Autowired
    public void setSSOMapperEnable(@Value("${sso.enable-mapping}") String value) {
        isSSOMapperEnable = "true".equalsIgnoreCase(value);
    }

}
